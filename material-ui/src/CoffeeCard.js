import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';

const CoffeeCard = (props) => {
    const { avatarSrc, title, subtitle, description, imageSrc } = props;

    return (
        <Card>
            <CardHeader
                avatar={<Avatar src={avatarSrc} />}
                action={
                    <IconButton aria-label="settings">
                        <ShareIcon />
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
            />
            <CardMedia
                style={{ height: "150px" }}
                image={imageSrc}
            />
            <CardContent>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">BUY NOW</Button>
                <Button size="small">OFFER</Button>
            </CardActions>
        </Card>
    );
};

export default CoffeeCard;
