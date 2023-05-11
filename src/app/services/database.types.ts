export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Blog: {
        Row: {
          author: string
          content: string
          created_at: string | null
          id: number
          image_url: string | null
          tag: string
          title: string
        }
        Insert: {
          author: string
          content?: string
          created_at?: string | null
          id?: number
          image_url?: string | null
          tag?: string
          title?: string
        }
        Update: {
          author?: string
          content?: string
          created_at?: string | null
          id?: number
          image_url?: string | null
          tag?: string
          title?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

