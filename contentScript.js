if(typeof observer==='undefined'){
  let observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (!mutation.addedNodes) return
  
      for (let i = 0; i < mutation.addedNodes.length; i++) {
        // do things to your newly added nodes here
        let node = mutation.addedNodes[i];
        if(node.classList && node.classList.contains("skip-credits")){
            node.children[0].click();
        }
        if(node.hasAttribute && node.hasAttribute("data-uia") && node.getAttribute("data-uia")==="next-episode-seamless-button"){
          node.click();
        }

      }
    })
  })
  
  observer.observe(document.body, {
      childList: true
    , subtree: true
    , attributes: false
    , characterData: false
  })
}
