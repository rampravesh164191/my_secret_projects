function Greet({title, children}){
  return (
    <div>Hello, {title} {children}</div>
  )
}

function App(){
  return (
    <>
    <Greet title="Ram" >
      <p>You are selected as a software engineer.</p>
    </Greet>
    </>
  )
}

export default App;