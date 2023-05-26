const Contact = () => {
  return (
    <section className='p-5 pb-40 gap-5 flex flex-col items-center'>
      <h1 className='font-bold text-5xl'>Contact me</h1>
      <h2>Do you want to contact me? Here are my contact details.</h2>

      <div className='flex flex-row gap-4'>
        <div className='backdrop-blur-md bg-white/30 p-3 rounded-md hover:cursor-pointer'>
          <h2>gabinomorales1212@hotmail.com</h2>
        </div>

        <div className='backdrop-blur-md bg-white/30 p-3 rounded-md hover:cursor-pointer'>
          <h2>JoseGabino12</h2>
        </div>

        <div className='backdrop-blur-md bg-white/30 p-3 rounded-md hover:cursor-pointer'>
          <h2>Jose Gabino Morales González</h2>
        </div>
      </div>
    </section>
  )
}

export default Contact
