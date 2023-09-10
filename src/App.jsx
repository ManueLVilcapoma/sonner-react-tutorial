import { Toaster, toast } from "sonner";
import {BiCheck} from 'react-icons/bi'

async function uploadSomething(){

  const res=await fetch('https://reqres.in/api/users/1')
  return await res.json()
  // return new Promise((resolve)=>setTimeout(resolve,3000))
}

function App(){
    return <div>
      <h1>Hello World</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, accusamus iure eaque aut officia dolore nostrum eius officiis! Doloribus quis quos beatae vero porro officia unde quo, dignissimos rem debitis!</p>
      <button onClick={()=>{
        // toast('Terminos aceptados',{
        //   description:"Gracias por aceptar las polítcas de la empresa",
        //   icon:<BiCheck style={{color:"green",fontSize:"1rem"}}/>
        // })
        // toast.success('Todo correcto')
        // toast.error('Ocurrió un problema')
        // toast('Quieres aceptar los terminos?',{
        //   action:{
        //     label:"Aceptar",
        //     onClick:()=>{
        //       alert('Terminos aceptados')
        //     }
        //   }
        // })
        // toast.promise(uploadSomething,{
        //   error:"Error en carga de archivo",
        //   success:({data})=>{
        //     return `Bienvenido ${data.first_name} ${data.last_name}`
        //   },
        //   loading:"Subiendo archivo"
        // })
        // toast(<div>
        //   <h3>Hello World</h3>
        // </div>)
        const toastId=toast("Gracias por aceptar los terminos")
        setTimeout(()=>{
            toast.error("Sonner",{
              id:toastId
            })
        },700)
        }}>
          Aceptar</button>
       <Toaster theme='dark'
       position="top-center"
       dir="auto"
       visibleToasts={3}
       duration={2000}
       closeButton
       richColors
       hotkey={['KeyC']}/>
    </div>
}
export default App;