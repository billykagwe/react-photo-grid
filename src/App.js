import React,{useState,useEffect} from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
console.log(process.env.PIXABAY_API_KEY)
function App() {

  const [images,setImages] = useState([])
  const [isLoading,setLoading] = useState(true)
  const [term,setTerm] = useState('')
  console.log(images.length)

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages([...data.hits])
      setLoading(false)
    })
    .catch(err => console.log(err))
  }, [term])
  

  return (
    <div className="container mx-auto px-2 ">
       <ImageSearch searchText={text => setTerm(text)}/>

      {!isLoading && images.length === 0 && <h1 className='text-5xl text-center mx-auto mt-32'>
        No images Found</h1>}

       {isLoading ? <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1> : 
      
       <div className="grid md:grid-cols-3 grid-flow-row gap-4">   
            {images.map(image => (
              <ImageCard key={image.id} image={image} />
            ))}
       </div>}
    </div>
  );
}

export default App;
