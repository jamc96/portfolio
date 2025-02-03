export default function Footer() {
  return (
    <footer className='h-16 w-full bg-black flex items-center justify-center text-neutral-200 space-x-2 text-sm sm:text-base'>
      <p>©</p>
      <span className='font-bold'>2025</span>
      <a
        target='_blank'
        href='https://github.com/jamc96/portfolio'
      >{`— Built by Jose Mejia`}</a>
    </footer>
  );
}
