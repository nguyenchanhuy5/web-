export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      courses: {
        Row: {
          id: string;
          name: string;
          category: "considering" | "inschool";
          price: number;
          description: string | null;
          payment_link: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          category: "considering" | "inschool";
          price: number;
          description?: string | null;
          payment_link?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          category?: "considering" | "inschool";
          price?: number;
          description?: string | null;
          payment_link?: string | null;
          created_at?: string;
        };
      };
    };
  };
};
