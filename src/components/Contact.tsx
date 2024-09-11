import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Github, Linkedin, Twitter } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold text-center mb-8'>Get in Touch</h1>
      <div className='space-y-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <Card>
            <CardHeader>
              <CardTitle className=' text-white'>Contact Information</CardTitle>
              <CardDescription className=' text-white'>
                Feel free to reach out through any of these channels.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-center space-x-4'>
                <MapPin className='text-muted-foreground ' color='white' />
                <span>15th cross, Lakkasandra, Bangalore - 560030</span>
              </div>
              <div className='flex items-center space-x-4'>
                <Phone className='text-muted-foreground' />
                <span>+91 9538774092</span>
              </div>
              <div className='flex items-center space-x-4'>
                <Mail className='text-muted-foreground' />
                <span>swebreza@gmail.com</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className=' text-white'>Connect with Me</CardTitle>
              <CardDescription className=' text-white'>
                Follow me on social media for updates.
              </CardDescription>
            </CardHeader>
            <CardContent className='flex justify-center space-x-4'>
              <a href='https://github.com/swebreza' target='_blank'>
                <Button variant='outline' size='icon'>
                  <Github className='h-4 w-4' />
                </Button>
              </a>
              <a href='https://www.linkedin.com/in/suwebreza/' target='_blank'>
                <Button variant='outline' size='icon'>
                  <Linkedin className='h-4 w-4' />
                </Button>
              </a>
              <a
                href='https://x.com/SwebReza'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button variant='outline' size='icon'>
                  <Twitter className='h-4 w-4' />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
        <Card className='h-fit'>
          <CardHeader>
            <CardTitle className=' text-white'>Location</CardTitle>
            <CardDescription className=' text-white'>
              Find me on the map
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className=' bg-muted flex items-center justify-center'>
              {/* <MapPin className='text-muted-foreground' /> */}
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.1121043563569!2d77.59851466962257!3d12.94313300624192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b7b364e129%3A0x45add615f7cd8e71!2sFamily%20Supermarket!5e0!3m2!1sen!2sin!4v1726043035875!5m2!1sen!2sin'
                width='900'
                height='300'
                style={{ border: 0 }}
                allowFullScreen={true}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
