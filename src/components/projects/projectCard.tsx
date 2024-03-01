import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@suid/material';
import { ProjectItem } from '~/data/types';

interface ProjectCardProp {
  item: ProjectItem;
}

const ProjectCard = (prop: ProjectCardProp) => {
  return (
    <Card class=" m-10 snap-center w-[400px] shrink-0 grow-0 bg-[#202618] min-h-[475px]">
      <CardActionArea>
        <CardMedia
          component="img"
          src={`src/assets/imgs/${prop.item.imgPath}`}
          sx={{
            padding: '1em 1em 0 1em',
            height: 250,
            objectFit: 'contain',
          }}
        />
        <CardContent class="min-h-[200px]">
          <div class="text-primary text-card">{prop.item.title}</div>
          <div class="text-secondary">{prop.item.description}</div>
        </CardContent>
      </CardActionArea>
      <CardActions class="justify-end">
        <a href={prop.item.infoLink} target="_blank" rel="noopener noreferrer">
          <Button size="small" color="warning">
            Learn More
          </Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
