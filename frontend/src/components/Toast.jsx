const Toast = ({ message, show }) => {
  return (
    

<div id="toast-simple" className={`flex ${show ? 'block' : 'hidden'} items-center w-full max-w-xs p-2 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow `} role="alert">
    <svg className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
    </svg>
    <div className="ps-4 text-sm font-normal">{message}</div>
</div>

  )
}

export default Toast