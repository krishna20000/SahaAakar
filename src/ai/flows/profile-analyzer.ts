'use server';

/**
 * @fileOverview Analyzes a LinkedIn profile and provides personalized suggestions for improvement.
 *
 * - analyzeProfile - A function that takes LinkedIn profile information and returns improvement suggestions.
 * - AnalyzeProfileInput - The input type for the analyzeProfile function.
 * - AnalyzeProfileOutput - The return type for the analyzeProfile function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeProfileInputSchema = z.object({
  profileSummary: z
    .string()
    .describe('A summary of the LinkedIn profile, including experience, skills, and education.'),
  desiredJob: z
    .string()
    .describe('The type of job the user is seeking.'),
});
export type AnalyzeProfileInput = z.infer<typeof AnalyzeProfileInputSchema>;

const AnalyzeProfileOutputSchema = z.object({
  suggestions: z
    .string()
    .describe('Personalized suggestions on how to improve the LinkedIn profile.'),
});
export type AnalyzeProfileOutput = z.infer<typeof AnalyzeProfileOutputSchema>;

export async function analyzeProfile(input: AnalyzeProfileInput): Promise<AnalyzeProfileOutput> {
  return analyzeProfileFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeProfilePrompt',
  input: {schema: AnalyzeProfileInputSchema},
  output: {schema: AnalyzeProfileOutputSchema},
  prompt: `You are a LinkedIn profile optimization expert. Analyze the following LinkedIn profile summary and provide personalized suggestions to improve it, tailored to the user's desired job.

Profile Summary: {{{profileSummary}}}
Desired Job: {{{desiredJob}}}

Suggestions:
`,
});

const analyzeProfileFlow = ai.defineFlow(
  {
    name: 'analyzeProfileFlow',
    inputSchema: AnalyzeProfileInputSchema,
    outputSchema: AnalyzeProfileOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
