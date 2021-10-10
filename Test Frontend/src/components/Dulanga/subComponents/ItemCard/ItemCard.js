import * as React from 'react';
import Card from '@mui/material/Card';
import { Radio, RadioGroup, Grid } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Images } from '../../utils/Image';
import Crow from "../../assests/crow.jpg";

export default function ItemCard(props) {

    const { data, selectedItem, onEdit, onEditItem } = props
    const [itemList, setItemList] = React.useState([])
    const [value, setValue] = React.useState(itemList && itemList[0] ? itemList[0].itemCode : "");
    
    const handleRadioChange = (item) => {
        console.log("sasas", item);
        setValue(item.itemCode);
        selectedItem(item)
        //setOpen(false);
    };

    React.useEffect(() => {
        setItemList(data)
        if (onEdit && data.find(item => item.itemName === onEditItem)) {
            let obj = data.find(item => item.itemName === onEditItem)
            setValue(obj.itemCode)
        }
    }, [data])


    return (
        <div style={{ flexDirection: "row", display: 'flex' }}>
            {console.log("sasa", data)}
            {itemList ? itemList.map((item, index) => {
                return (
                    <RadioGroup
                        row
                        aria-label="position"
                        name="quiz"
                        value={value}
                        onChange={() => handleRadioChange(item)}
                    >
                        <Card sx={{ maxWidth: 345, margin: 1 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={item.itemImg}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.itemName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.itemDescription}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {"RS"} {item.itemPrice}{".00"}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Radio value={item.itemCode} />
                            </CardActions>
                        </Card>
                    </RadioGroup>
                )
            }) : <h3>sasas</h3>}

        </div>

    );
}
