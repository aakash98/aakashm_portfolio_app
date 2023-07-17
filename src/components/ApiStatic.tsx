
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

type Contact = {
    github: string
    linkedin: string
    email: string
    phone: string
  }
   
  export const getStaticProps: GetStaticProps<{
    contact: Contact
  }> = async () => {
    const res = await fetch('http://localhost:3000/api/contact')
    const contact = await res.json()
    return { props: { contact } }
  }

  export default function ApiStatic({
    contact,
  }: InferGetStaticPropsType<typeof getStaticProps>) {
    return contact
  }
 