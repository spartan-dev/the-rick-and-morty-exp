import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Chip from "../Chips";
import Stack from "@mui/material/Stack";
import "./card.css";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardCustom = ({ personaje }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const statusSet = (status) => {
    let chip = undefined;
    if (status === "Dead") {
      chip = (
        <Chip label={status} color="error" size="small" variant="outlined" />
      );
    } else if (status === "unknown") {
      chip = (
        <Chip label={status} color="warning" size="small" variant="outlined" />
      );
    } else {
      chip = (
        <Chip label={status} color="success" size="small" variant="outlined" />
      );
    }
    return chip;
  };
  return (
    <Card sx={{ maxWidth: 345 }} className="separador">
      <CardHeader
        avatar={
          <Avatar
            sx={{ width: 56, height: 56 }}
            aria-label="recipe"
            src={`${personaje.image}`}
          >
            {personaje.name}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${personaje.name}`}
        subheader={`Gender: ${personaje.gender}`}
      />
      <CardMedia
        component="img"
        height="300"
        image={`${personaje.image}`}
        alt={`${personaje.name}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <div className="inner-list-card">
            <span>Especie:{personaje.species}</span>
            Tipo:
            <span>
              {personaje.type === "" ? (
                <Chip label="no type" color="warning" />
              ) : (
                <Chip label={personaje.type} color="success" />
              )}
            </span>
          </div>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            <Stack
              direction="row"
              spacing={8}
              justifyContent="space-between"
              alignItems="center"
            >
              Status: {statusSet(personaje.status)}
            </Stack>
          </Typography>
          <Typography paragraph>Origen: {personaje.origin.name}</Typography>
          <Typography paragraph>
            Numero Episodios: {personaje.episode.length}
          </Typography>
          <Typography>Genero: {personaje.gender}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default CardCustom;
