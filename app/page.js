import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div>
        <h1 className='head_text'>Discover & Share
          <br className='max:hidden'/>
          <span className='orange_gradient'>Your Message </span>
        </h1>
      </div>
    </main>
  )
}
