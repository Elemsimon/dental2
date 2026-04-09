export type CompanyStatus = "demo" | "converted" | "migrated"

export interface Company {
  id: string
  company_id: string
  name: string
  industry: string | null
  status: CompanyStatus
  created_at: string
}

export interface Lead {
  id: string
  company_id: string
  name: string
  email: string
  phone: string | null
  service: string | null
  booking_date: string | null
  booking_time: string | null
  created_at: string
}

// What client websites POST to Peter's API
export interface LeadSubmission {
  company_id: string
  name: string
  email: string
  phone?: string
  service?: string
  booking_date?: string
  booking_time?: string
}