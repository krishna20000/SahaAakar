'use server';

import { analyzeProfile, type AnalyzeProfileInput, type AnalyzeProfileOutput } from '@/ai/flows/profile-analyzer';

export async function handleAnalyzeProfile(input: AnalyzeProfileInput): Promise<AnalyzeProfileOutput | { error: string }> {
  try {
    const result = await analyzeProfile(input);
    return result;
  } catch (error) {
    console.error("Error analyzing profile:", error);
    if (error instanceof Error) {
        return { error: error.message };
    }
    return { error: 'An unexpected error occurred during profile analysis.' };
  }
}
