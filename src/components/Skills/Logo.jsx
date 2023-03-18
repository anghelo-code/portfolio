export const Logo = ({ children }) => {
  return (
    <div className="col-md-3 p-4 d-flex justify-content-center">
      <article className='w-auto'>
        <span data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover" data-bs-trigger="hover">
          { children }
        </span>
        
      </article>
    </div>
  )
}
