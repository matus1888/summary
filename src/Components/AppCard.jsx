import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import React from "react";
import Paper from "@material-ui/core/Paper";

const AppCard=(props)=>{
    return(
       <Paper>
           <Card>
               <CardContent>
                   <Typography  color="textSecondary" gutterBottom>
                       {props.title||"Заголовок"}
                   </Typography>
                   <Typography variant="h5" component="h2">
                       Lorem ipsum dolor sit amet.
                   </Typography>
                   <Typography  color="textSecondary">
                       adjective
                   </Typography>
                   <Typography variant="body2" component="p">
                       well meaning and kindly.
                       <br />
                       {'"a benevolent smile"'}
                   </Typography>
               </CardContent>
               <CardActions>
                   <Button size="small">Learn More</Button>
               </CardActions>
           </Card>
       </Paper>
    )
}
export default AppCard