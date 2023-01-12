const reducer = (state, action) =>{
            switch(action.type){
                case 'INCREMENT':
                    
                    return {
                        ...state,
                        posts : state.posts.concat(action.post)
                    }
                
                case 'DECREMENT':
                    const posts = [ ...state.posts ];
                    posts.sort(() => Math.random() - .5 ); // astuce qui joue sur l'algo de tri
                    
                    return {
                        ...state,
                        posts : posts
                    }

                default:
                    return state;
            }

        }
        
export { reducer }