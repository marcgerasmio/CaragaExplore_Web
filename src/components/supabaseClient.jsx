import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ujljriblzsbrogbilgom.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqbGpyaWJsenNicm9nYmlsZ29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2MzE3MTUsImV4cCI6MjA0ODIwNzcxNX0.4gpvqbC4AZxao2VLKP4MP1sQUrzCjMGHWzEFuuanmWc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
