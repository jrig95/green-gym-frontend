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

export const LeaderboardPage = ({ userData, token }) => {
  const { data, isSuccess, isLoading, isError } = useLeaderboard(
    userData.id,
    token
  );
  const [cardSection, setCardSection] = useState("leaderboard");
  const bambooHolder =
    userData.user_total_calories < 200
      ? Bamboo1
      : userData.user_total_calories < 400
      ? Bamboo2
      : userData.user_total_calories < 990
      ? Bamboo3
      : userData.user_total_calories > 1000
      ? Bamboo4
      : null;
  const isAdmin = userData.admin;
  if (isLoading) return <LoadingSpinnerLarge />;
  const rows = data?.slice(0, 10).map((item, i) => {
    return (
      <tr key={item.id}>
        <td>
          <Text size="sm" weight={500}>
            {i + 1}
          </Text>
        </td>
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
          { label: "Bamboo", value: "bamboo", disabled: isAdmin },
        ]}
        value={cardSection}
        onChange={(value) => setCardSection(value)}
        color="teal"
        radius="xl"
        size="lg"
      />
      <div className={styles.container}>
        {cardSection === "bamboo" && !isAdmin ? (
          <Card>
            <Card.Section>
              <p size="xl" weight={700}>
                Work out more and join more programs, your tree will grow!
              </p>
              <img src={BambooBg} id={styles.bambooBg} width="100%" />
              <img
                id={styles.bambooTree}
                src={bambooHolder}
                alt="bamboo"
                width="80%"
              />
            </Card.Section>
          </Card>
        ) : (
          <Card className={styles.leaderboard}>
            <Card.Section>
              <p size="xl" weight={700}>
                Keep it up and you'll be on top!
              </p>

              <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>User</th>
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
