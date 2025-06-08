'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { handleAnalyzeProfile } from '@/app/actions';
import type { AnalyzeProfileOutput } from '@/ai/flows/profile-analyzer';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import { Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const profileAnalysisSchema = z.object({
  profileSummary: z.string().min(50, "Profile summary must be at least 50 characters long.").max(5000, "Profile summary must be at most 5000 characters long."),
  desiredJob: z.string().min(3, "Desired job must be at least 3 characters long.").max(100, "Desired job must be at most 100 characters long."),
});

type ProfileAnalysisFormValues = z.infer<typeof profileAnalysisSchema>;

export function AiProfileAnalyzerSection() {
  const [analysisResult, setAnalysisResult] = useState<AnalyzeProfileOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<ProfileAnalysisFormValues>({
    resolver: zodResolver(profileAnalysisSchema),
    defaultValues: {
      profileSummary: '',
      desiredJob: '',
    },
  });

  const onSubmit: SubmitHandler<ProfileAnalysisFormValues> = async (data) => {
    setIsLoading(true);
    setAnalysisResult(null);
    try {
      const result = await handleAnalyzeProfile(data);
      if ('error' in result) {
        toast({
          title: "Analysis Failed",
          description: result.error,
          variant: "destructive",
        });
        setAnalysisResult(null);
      } else {
        setAnalysisResult(result);
        toast({
          title: "Analysis Complete!",
          description: "Your profile suggestions are ready below.",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
          title: "Analysis Failed",
          description: "An unexpected error occurred. Please try again.",
          variant: "destructive",
        });
      setAnalysisResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-analyzer" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper animationType="fade-up" className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Get Your Free AI Profile Analysis</h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-foreground/70">
            Paste your LinkedIn summary and desired job to receive instant, AI-powered improvement suggestions.
          </p>
        </AnimatedWrapper>

        <AnimatedWrapper animationType="scale-up">
          <Card className="max-w-2xl mx-auto shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Analyze Your Profile</CardTitle>
              <CardDescription>Enter your details below for personalized feedback.</CardDescription>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="profileSummary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="profileSummary">LinkedIn Profile Summary</FormLabel>
                        <FormControl>
                          <Textarea
                            id="profileSummary"
                            placeholder="Paste your current LinkedIn profile summary here..."
                            rows={8}
                            {...field}
                            className="bg-background"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="desiredJob"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="desiredJob">Desired Job Title / Industry</FormLabel>
                        <FormControl>
                          <Input
                            id="desiredJob"
                            placeholder="e.g., Senior Software Engineer, Marketing Manager in Tech"
                            {...field}
                            className="bg-background"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-brand-purple-lighter text-primary-foreground hover:opacity-90 transition-opacity transform hover:scale-105" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      'Analyze My Profile'
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </AnimatedWrapper>

        {analysisResult && analysisResult.suggestions && (
          <AnimatedWrapper animationType="fade-up" delay="delay-200" className="mt-12">
            <Card className="max-w-2xl mx-auto shadow-xl bg-primary/5">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Your Personalized Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm md:prose-base max-w-none text-foreground/90 whitespace-pre-line">
                  {analysisResult.suggestions}
                </div>
              </CardContent>
            </Card>
          </AnimatedWrapper>
        )}
      </div>
    </section>
  );
}
