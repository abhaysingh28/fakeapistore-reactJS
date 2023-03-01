import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./SingleItems.css"

const SingleItems = () => {
    const { id } = useParams();

    const [item, setItem] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        fetchItem()
    }, []);

    const fetchItem = async () => {
        const { data } = await axios(`https://fakestoreapi.com/products/${id}`);
        setItem(data);
        console.log(data);
        setLoading(false);
    };

    return (
        <>
            <div className="singleitems">

                <div className="singleitems__container">
                    {loading ? <h1></h1> : <div className="singleitems__container__img">
                        <img src={item.image} alt="" />
                    </div>
                    }

                    <div className="singleitems__container_right">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        {
                            loading ? <h1></h1> : <h3 className="redprice" >Price: ₹ {item.price}</h3>
                        }
                        
                        {
                            loading ? <h1></h1> : <h3>Category: {item.category}</h3>
                        }

                        {
                            loading ? <h1></h1> : <button>Add to Cart</button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleItems;
