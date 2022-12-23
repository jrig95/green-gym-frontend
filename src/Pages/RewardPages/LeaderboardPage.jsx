import { Card, List, ThemeIcon, Text } from "@mantine/core";
import styles from "./RewardsPage.module.css";
import Bamboo1 from "../../assets/bamboos/bamboo-1.png";
import Bamboo2 from "../../assets/bamboos/bamboo-2.png";
import Bamboo3 from "../../assets/bamboos/bamboo-3.png";
import Bamboo4 from "../../assets/bamboos/bamboo-4.png";
import BambooBg from "../../assets/bamboos/bamboo-bg2.jpeg";

import { useLeaderboard } from "./hooks/useLeaderboard";

// mock data for leaderboard with the structure of {id: "id", name: "name", points: 87, iconUrl: "iconUrl"}
const leaderboard = [
  {
    id: "1",
    name: "Jim",
    points: 87,
    iconUrl: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "Jane",
    points: 56,
    iconUrl: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    name: "Jack",
    points: 44,
    iconUrl: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "4",
    name: "Jill",
    points: 43,
    iconUrl: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: "5",
    name: "Jenny",
    points: 37,
    iconUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "6",
    name: "Pam",
    points: 33,
    iconUrl: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: "7",
    name: "Mike",
    points: 0,
    iconUrl: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: "8",
    name: "Sean",
    points: 0,
    iconUrl: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: "9",
    name: "James",
    points: 0,
    iconUrl: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: "10",
    name: "You",
    points: 0,
    iconUrl: "https://i.pravatar.cc/150?img=10",
  },
];

export const LeaderboardPage = ({ id }) => {
  const { data } = useLeaderboard(id);
  return (
    <section className={styles.container}>
      <Card className={styles.bamboo}>
        <Card.Section>
          <p size="xl" weight={700}>
            Bamboo Tree Rewards
          </p>
          <img src={BambooBg} id={styles.bambooBg} width={500} />
          <img
            id={styles.bambooTree}
            src={Bamboo1}
            alt="bamboo"
            width={750}
            color="green"
          />
        </Card.Section>
      </Card>
      <Card className={styles.leaderboard}>
        <Card.Section>
          <p size="xl" weight={700}>
            Leaderboard
          </p>

          <List
            spacing="xs"
            size="sm"
            center
            icon={<ThemeIcon color="teal" size={24} radius="xl"></ThemeIcon>}
          >
            {leaderboard.map(({ id, name, points, iconUrl }, i) => {
              return (
                <List.Item
                  icon={
                    name === "You" ? (
                      <ThemeIcon color="green" size={50} radius="xl">
                        <img src={iconUrl} />
                      </ThemeIcon>
                    ) : (
                      <ThemeIcon color="teal" size={50} radius="xl">
                        <img src={iconUrl} />
                      </ThemeIcon>
                    )
                  }
                  key={id}
                  type="ordered"
                >
                  <span weight={700} key={id}>
                    {`${i + 1}.       ${name}      ${points} points`}
                  </span>
                </List.Item>
              );
            })}
          </List>
        </Card.Section>
      </Card>
    </section>
  );
};
