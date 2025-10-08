import Testimonial from './components/Testimonial'

function App() {
  return (
<div className="bg-gray-200 flex flex-col items-center justify-center min-h-screen overflow-x-hidden">
      <div className='mb-20 flex flex-col items-center'>
          <h1 className='font-bold mt-8 text-3xl text-gray-500'>Our Testimonials</h1>
          <div className='w-1/2 h-1 bg-violet-500 rounded-2xl '></div>
      </div>
      <Testimonial/>
    </div>
  )
}

export default App
