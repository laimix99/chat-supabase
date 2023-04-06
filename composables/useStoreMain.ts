import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { createClient } from '@supabase/supabase-js'


export const useStoreMain = defineStore('counter', () => {
  const state = reactive({
    user: {}
  }) as any

  const supabase = createClient('https://rztmnagbwftsiikfvvuw.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6dG1uYWdid2Z0c2lpa2Z2dnV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1MTk1MjgsImV4cCI6MTk5NjA5NTUyOH0.1NMobkl-2f_yjJ1Hd1zKPSpRWVypZCVTalK7zUB1Un8'
  )

  async function getUser() {
    const { data: { user } } = await supabase.auth.getUser()
    console.log(':user', user)
    state.user = user
  }
  
  async function singIn(provider: any) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider
    })
    console.log(':data', data)
    console.log(':error', error)
    // router.push({ path: '/chat' })
  }

  async function register(email: string, password: string) {
    if (email === '') return
    if (password === '') return
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    getUser()
    console.log(':email', data)
    console.log(':email', error)
  }

  async function getUsers() {  
  const  data  = await supabase
  .from('users')
  .select('id')
  .eq('email', 'doe@example.com')
  .then(response => {
    console.log(response)
  })
  console.log(':data', data)
  }

  async function goOut() {
    const { error } = await supabase.auth.signOut()
    location.reload()
    console.log(':error', error)
  }

  return {
    state,

    getUser,
    getUsers,
    singIn,
    goOut,
    register,
  }
})