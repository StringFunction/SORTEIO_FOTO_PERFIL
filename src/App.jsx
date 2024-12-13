import { useState } from 'react';
import { BsInstagram, BsWhatsapp, BsLinkedin } from "react-icons/bs";

function App() {
  const [count, setCount] = useState([]); 
  const [selecionadas, setSelecionadas] = useState([]); 

  const Armazenar = (e) => {
    const fotos = Array.from(e.target.files); 
    const fotosUrl = fotos.map((file) => URL.createObjectURL(file)); 
    setCount((prev) => [...prev, ...fotosUrl]); 
  };

  const SortearFotos = (e) => {
    e.preventDefault();
    if (count.length < 3) {
      alert("Envie pelo menos 3 fotos para realizar o sorteio!");
      return;
    }

   
    const shuffled = [...count].sort(() => 0.5 - Math.random());
    setSelecionadas(shuffled.slice(0, 3));
  };

  return (
    <>
      <div id='Conteiner ' className='flex flex-col justify-center items-center'>
        <div id='titulo' className='text-white text-center w-[600px] flex flex-col justify-center items-center'>
          <h1 className='text-[70px]'>SORTEIO</h1>
          <h2>SORTEIO PARA ESCOLHER FOTOS PARA REDE SOCIAL:</h2>
          <h3>Deixa a IA Descobrir qual a melhor foto para suas redes sociais</h3>
          <div className='flex gap-28'> 
            <BsInstagram /> 
            <BsWhatsapp /> 
            <BsLinkedin />
          </div>
        </div>

        <div id='Formulario' className='text-white'>
          <form onSubmit={SortearFotos}>
            <label htmlFor="upload">Escolha as fotos:</label>
            <input
              id="upload"
              type="file"
              multiple
              accept="image/*"
              onChange={Armazenar}
            /><br />
            <input type="submit" value="SORTEAR" />
          </form>
        </div>
      <div id='card' className='text-white flex gap-4 '>
        
          <div   className='border w-[300px] h-[300px]   flex flex-col justify-center items-center'>
            <h2>FOTO PARA PERFIL INSTAGRAM</h2>
            <img src={selecionadas[0]} className='w-full h-full object-cover' />
          </div>
          <div  className='border w-[300px] h-[300px]  flex flex-col justify-center items-center'>
          <h2>FOTO PARA PERFIL Whatsapp</h2>

            <img src={selecionadas[1]} className='w-full h-full object-cover' />
          </div>
          <div  className='border w-[300px] h-[300px]   flex flex-col justify-center items-center'>
            <h2>FOTO PARA PERFIL Linkedin</h2>
            <img src={selecionadas[2]} className='w-full h-full object-cover' />
          </div>
      
      </div>
      </div>

    </>
  );
}

export default App;
