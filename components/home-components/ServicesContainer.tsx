import { Box, Grid, SvgIconTypeMap, Typography } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { motion } from "framer-motion";
import { ServiceContainer } from "./ServiceContainer";

interface IServicesContainer {
  rootStyle: any;
  rootItemStyle: any;
  variants: any;
  mainTitle: string;
  mainTitleStyle: any;
  listItemStyle: any;
  serviceGridStyle: any;
  services: {
    title: string;
    link: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    descs: string[];
    mentorship?: boolean;
  }[];
}

export const ServicesContainer = ({
  rootStyle,
  variants,
  mainTitle,
  mainTitleStyle,
  listItemStyle,
  serviceGridStyle,
  services,
  rootItemStyle,
}: IServicesContainer) => {
  return (
    <Grid className={rootStyle} container>
      <Grid className={rootItemStyle} item>
        <Typography className={mainTitleStyle} variant="h4" component="h3">
          {mainTitle}
        </Typography>
      </Grid>
      <Grid className={rootItemStyle} item>
        <Grid spacing={3} className={serviceGridStyle} container>
          {services.map((service) => (
            <Grid key={service.title} item>
              <ServiceContainer
                title={service.title}
                link={service.link}
                Icon={service.icon}
                mentorship={service.mentorship}
              >
                <>
                  {service.descs.map((description, i) => (
                    <Typography
                      key={service.title + " " + i}
                      variant="body2"
                      className={listItemStyle}
                    >
                      {description}
                    </Typography>
                  ))}
                </>
              </ServiceContainer>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
