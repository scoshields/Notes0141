export interface Note {
  id: string;
  content: string;
  processedContent?: string;
  isProcessing: boolean;
  error?: string;
}

export interface ProcessingOptions {
  prompt: string;
  content: string;
  customInstructions?: string;
}

export interface NoteFormData {
  content: string;
  promptType: keyof typeof import('../utils/prompts').PROMPT_OPTIONS;
  noteType: 'session' | 'assessment';
  isGuided: boolean;
  guidedResponses?: Record<string, string>;
  customInstructions?: string;
}

export interface GuidedQuestion {
  id: string;
  text: string;
  category: string;
}