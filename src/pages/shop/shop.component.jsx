import React from 'react'
import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx'



class ShopPage extends React.Component{
   
    state = {
        collections : SHOP_DATA
    }

    render (){
        return(
            <div>
                {this.state.collections.map(({id, ...otherProps}) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))}
            </div>
        )
    }
}

export default ShopPage;