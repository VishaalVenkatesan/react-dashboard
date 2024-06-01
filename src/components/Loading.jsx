import { cardio } from 'ldrs'

const Loading = () => {
    cardio.register()
  return (
    <div className="flex items-center justify-center h-screen">    
    <l-cardio
     size="50"
      stroke="4"
      speed="2" 
      color="black" 
    ></l-cardio>
    </div>
  )
}

export default Loading



