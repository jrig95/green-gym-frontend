import {
  Avatar,
  Table,
  Group,
  Text,
  Card,
  SegmentedControl,
} from "@mantine/core";
import styles from "./RewardsPage.module.css";
import Bamboo1 from "../../assets/bamboos/bamboo-1.png";
import Bamboo2 from "../../assets/bamboos/bamboo-2.png";
import Bamboo3 from "../../assets/bamboos/bamboo-3.png";
import Bamboo4 from "../../assets/bamboos/bamboo-4.png";
import BambooBg from "../../assets/bamboos/bamboo-bg2.jpeg";

import { useLeaderboard } from "./hooks/useLeaderboard";
import { useState } from "react";
import LoadingSpinnerLarge from "../../components/UI/LoadingSpinnerLarge";

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

export const LeaderboardPage = ({ userData, token }) => {
  const { data, isSuccess, isLoading, isError } = useLeaderboard(userData.id, token);
  const [cardSection, setCardSection] = useState("leaderboard");
  const [bambooHolder, setBambooHolder] = useState(Bamboo1);
  const bamboo_style =
    bambooHolder === Bamboo1
      ? styles.bamboo1
      : bambooHolder === Bamboo2
      ? styles.bamboo2
      : bambooHolder === Bamboo3
      ? styles.bamboo3
      : styles.bamboo4;

  if(isLoading) return <LoadingSpinnerLarge/>;
  const rows =
    data?.map((item, i) => {
      return (
        <tr key={item.first_name}>
          <td>
            <Group>
              <Avatar size={40} src={item.photo_url} radius={40} />
              <div>
                <Text size="sm" weight={500}>
                  {item.first_name}
                </Text>
                <Text size="xs" color="dimmed">
                  {item.user_total_calories} points
                </Text>
              </div>
            </Group>
          </td>
          <td>
            <Text size="sm" weight={500}>
              {i + 1}
            </Text>
          </td>

          <td>
            <Text size="xs" color="dimmed">
              {item.user_total_calories}
            </Text>
          </td>
        </tr>
      );
    });
  return (
    <section>
      <SegmentedControl
        data={[
          { label: "Leaderboard", value: "leaderboard" },
          { label: "Bamboo", value: "bamboo" },
        ]}
        value={cardSection}
        onChange={(value) => setCardSection(value)}
        color="teal"
        radius="xl"
      />
      <div className={styles.container}>
        {cardSection === "bamboo" ? (
          <Card>
            <Card.Section>
              <p size="xl" weight={700}>
                Bamboo Tree Rewards
              </p>
              <img src={BambooBg} id={styles.bambooBg} width="80%" />
              <img
              id = {styles.bambooTree}
                src={Bamboo1}
                alt="bamboo"
                width="80%"
              />  
            </Card.Section>
            
          </Card>
        ) : (
          <Card className={styles.leaderboard}>
            <Card.Section>
              <p size="xl" weight={700}>
                Leaderboard
              </p>

              <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Rank</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </Table>
            </Card.Section>
          </Card>
        )}
      </div>
    </section>
  );
};
