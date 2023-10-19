// display a single win, pass win from winlist into this //

export function winDetails() {
  return (
    <>
      <div>
        <h2>{win.title}</h2>
        <h3>{win.name}</h3>
        <h4>{win.date}</h4>
        <p>{win.win}</p>
      </div>
    </>
  )
}

export default winDetails
