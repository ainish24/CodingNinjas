const GetStarted = () => {
  return (
    <>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <input 
            type="email"
            placeholder="Email Address"
            autoComplete="off"
        />
        <button style={{backgroundColor: 'rgb(229,9,20)', marginLeft:'1em'}}>Get Started &gt; </button>
    </>
  )
}

export default GetStarted