
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://dccsafxeahvqcednghox.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjY3NhZnhlYWh2cWNlZG5naG94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMTA3MzQsImV4cCI6MjAwNTY4NjczNH0.nnUgIBCfZEpSCSoHRlBXRMPZena1GeBKRCwlTg-nrI0'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;