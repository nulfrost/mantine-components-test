import "./App.css";
import React, { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Text,
  Button,
  Title,
  useMantineTheme,
  ThemeIcon,
  SimpleGrid,
  Accordion,
  ActionIcon,
  Menu,
  Avatar,
  Divider,
  UnstyledButton,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import {
  BrandInstagram,
  BrandTwitter,
  BrandYoutube,
  ChevronDown,
  Heart,
  Icon as TablerIcon,
  Logout,
  Message,
  PlayerPause,
  Settings,
  Star,
  SwitchHorizontal,
  Trash,
} from "tabler-icons-react";
import { MOCK_FEATURES } from "./mocks/features";
import { MOCK_FOOTER } from "./mocks/footer";

const links = [
  {
    link: "/about",
    label: "Features",
  },
  {
    link: "/pricing",
    label: "Pricing",
  },
  {
    link: "/learn",
    label: "Learn",
  },
  {
    link: "/community",
    label: "Community",
  },
];

const useStyles = createStyles((theme, _params, getRef) => {
  const control = getRef("control");
  return {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
    },

    links: {
      [theme.fn.smallerThan("xs")]: {
        display: "none",
      },
    },

    burger: {
      [theme.fn.largerThan("xs")]: {
        display: "none",
      },
    },

    link: {
      display: "block",
      lineHeight: 1,
      padding: "8px 12px",
      borderRadius: theme.radius.sm,
      textDecoration: "none",
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      },
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
            : theme.colors[theme.primaryColor][0],
        color:
          theme.colors[theme.primaryColor][
            theme.colorScheme === "dark" ? 3 : 7
          ],
      },
    },
    wrapper: {
      position: "relative",
      paddingTop: 120,
      paddingBottom: 80,

      "@media (max-width: 755px)": {
        paddingTop: 80,
        paddingBottom: 60,
      },
    },

    inner: {
      position: "relative",
      zIndex: 1,
    },
    title: {
      textAlign: "center",
      fontWeight: 800,
      fontSize: 40,
      letterSpacing: -1,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      marginBottom: theme.spacing.xs,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      "@media (max-width: 520px)": {
        fontSize: 28,
        textAlign: "left",
      },
    },

    description: {
      textAlign: "center",

      "@media (max-width: 520px)": {
        textAlign: "left",
        fontSize: theme.fontSizes.md,
      },
    },

    controls: {
      marginTop: theme.spacing.lg,
      display: "flex",
      justifyContent: "center",

      "@media (max-width: 520px)": {
        flexDirection: "column",
      },
    },

    control: {
      "&:not(:first-of-type)": {
        marginLeft: theme.spacing.md,
      },

      "@media (max-width: 520px)": {
        height: 42,
        fontSize: theme.fontSizes.md,

        "&:not(:first-of-type)": {
          marginTop: theme.spacing.md,
          marginLeft: 0,
        },
      },
    },
    featureWrapper: {
      paddingTop: theme.spacing.xl * 4,
      paddingBottom: theme.spacing.xl * 4,
    },

    featureTitle: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
      marginBottom: theme.spacing.md,
      textAlign: "center",

      [theme.fn.smallerThan("sm")]: {
        fontSize: 28,
        textAlign: "left",
      },
    },

    featureDescription: {
      textAlign: "center",

      [theme.fn.smallerThan("sm")]: {
        textAlign: "left",
      },
    },
    faqWrapper: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
      minHeight: 650,
    },

    faqTitle: {
      fontWeight: 400,
      marginBottom: theme.spacing.xl * 1.5,
    },

    faqControl: {
      ref: control,

      "&:hover": {
        backgroundColor: "transparent",
      },
    },

    item: {
      borderRadius: theme.radius.md,
      marginBottom: theme.spacing.lg,

      border: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[3]
      }`,
    },

    itemOpened: {
      [`& .${control}`]: {
        color:
          theme.colors[theme.primaryColor][
            theme.colorScheme === "dark" ? 4 : 6
          ],
      },
    },
    footer: {
      marginTop: 120,
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[2]
      }`,
    },

    logo: {
      maxWidth: 200,

      [theme.fn.smallerThan("sm")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },

    footerDescription: {
      marginTop: 5,

      [theme.fn.smallerThan("sm")]: {
        marginTop: theme.spacing.xs,
        textAlign: "center",
      },
    },

    footerInner: {
      display: "flex",
      justifyContent: "space-between",

      [theme.fn.smallerThan("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },

    groups: {
      display: "flex",
      flexWrap: "wrap",

      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },

    footerWrapper: {
      width: 160,
    },

    footerLink: {
      display: "block",
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[6],
      fontSize: theme.fontSizes.sm,
      paddingTop: 3,
      paddingBottom: 3,

      "&:hover": {
        textDecoration: "underline",
      },
    },

    footerTitle: {
      fontSize: theme.fontSizes.lg,
      fontWeight: 700,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      marginBottom: theme.spacing.xs / 2,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },

    afterFooter: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: theme.spacing.xl,
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,

      [theme.fn.smallerThan("sm")]: {
        flexDirection: "column",
      },
    },

    social: {
      [theme.fn.smallerThan("sm")]: {
        marginTop: theme.spacing.xs,
      },
    },
    userMenu: {
      [theme.fn.smallerThan("xs")]: {
        display: "none",
      },
    },

    user: {
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      transition: "background-color 100ms ease",

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      },
    },
    userActive: {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    },
  };
});

function HeroText() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Container className={classes.wrapper} size={1400} mb={120}>
      <div className={classes.inner}>
        <Title className={classes.title}>
          Automated AI{" "}
          <Text component="span" color={theme.primaryColor} inherit>
            code reviews
          </Text>{" "}
          for any stack
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Build more reliable software with AI companion. AI is also trained
            to detect lazy developers who do nothing and just complain on
            Twitter.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            size="lg"
            variant="default"
            color="gray"
          >
            Book a demo
          </Button>
          <Button className={classes.control} size="lg">
            Purchase a license
          </Button>
        </div>
      </div>
    </Container>
  );
}

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

export function HeaderSimple({ links }: HeaderSimpleProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [active, setActive] = useState(links[0].link);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const { classes, theme, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={60} mb={60}>
      <Container className={classes.header}>
        <Text>Some app</Text>
        <Group spacing={5} className={classes.links}>
          {items}
          <Menu
            size={260}
            placement="end"
            transition="pop-top-right"
            className={classes.userMenu}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            control={
              <UnstyledButton
                className={cx(classes.user, {
                  [classes.userActive]: userMenuOpened,
                })}
              >
                <Group spacing={7}>
                  <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                    Dane
                  </Text>
                  <ChevronDown size={12} />
                </Group>
              </UnstyledButton>
            }
          >
            <Menu.Label>Settings</Menu.Label>
            <Menu.Item icon={<Settings size={14} />}>
              Account settings
            </Menu.Item>
            <Menu.Item icon={<SwitchHorizontal size={14} />}>
              Change account
            </Menu.Item>
            <Menu.Item icon={<Logout size={14} />}>Logout</Menu.Item>
          </Menu>
        </Group>

        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  );
}

interface FeatureProps {
  icon: TablerIcon;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  const theme = useMantineTheme();
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: 20, height: 20 }} />
      </ThemeIcon>
      <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
        {title}
      </Text>
      <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

interface FeaturesGridProps {
  title: React.ReactNode;
  description: React.ReactNode;
  data?: FeatureProps[];
}

export function FeaturesGrid({
  title,
  description,
  data = MOCK_FEATURES,
}: FeaturesGridProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const features = data.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Container className={classes.featureWrapper}>
      <Title className={classes.featureTitle}>{title}</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.featureDescription}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={theme.spacing.xl * 2}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "xl" },
          { maxWidth: 755, cols: 1, spacing: "xl" },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

export function FaqSimple() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion
        iconPosition="right"
        classNames={{
          item: classes.item,
          itemOpened: classes.itemOpened,
          control: classes.control,
        }}
      >
        <Accordion.Item label="How can I reset my password?">
          {placeholder}
        </Accordion.Item>
        <Accordion.Item label="Can I create more that one account?">
          {placeholder}
        </Accordion.Item>
        <Accordion.Item label="Do you store credit card information securely?">
          {placeholder}
        </Accordion.Item>
        <Accordion.Item label="What payment systems to you work with?">
          {placeholder}
        </Accordion.Item>
        <Accordion.Item label="How can I subscribe to monthly newsletter?">
          {placeholder}
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export function FooterLinks({ data }: FooterLinksProps) {
  const { classes } = useStyles();
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.footerLink}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.footerWrapper} key={group.title}>
        <Text className={classes.footerTitle}>{group.title}</Text>
        {links}
      </div>
    );
  });
  return (
    <footer className={classes.footer}>
      <Container className={classes.footerInner}>
        <div className={classes.logo}>
          <Text>sample app</Text>
          <Text size="xs" color="dimmed" className={classes.footerDescription}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <BrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandYoutube size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandInstagram size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

function App() {
  return (
    <>
      <HeaderSimple links={links} />
      <HeroText />
      <FeaturesGrid
        title="Integrate effortlessly with any technology stack"
        description="Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon."
      />
      <FaqSimple />
      <FooterLinks data={MOCK_FOOTER} />
    </>
  );
}

export default App;
