export default {
  install: (app, options = {}) => { // 1
    app.directive('color', function (el, binding) {
      if( options.hasOwnProperty('target') && 
          options.target === 'back')
      {
        // 2
        el.style.backgroundColor = binding.value
      }else{
        el.style.color = binding.value
      }    
    })
  }
}