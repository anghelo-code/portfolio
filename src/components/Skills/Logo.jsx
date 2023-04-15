export const Logo = ({ children, name }) => {
  return (
    <div className="col-md-3 col-6 p-4 d-flex justify-content-center">
      <article className="w-auto tooltip__css" >
        <div className="tooltip-box" >{ name }</div>
        { children }

      </article>

    </div>
  )
}
