export function programInfoGenerate(programInfo) {
  const { program_title: programTitle, daily_workouts: dailyWorkouts } =
    programInfo;
  const programInfoString = `Welcome to our amazing ${programTitle} program! This is a complete, ${
    dailyWorkouts?.length || "one"
  }-day intensive workout plan designed to help you achieve your fitness goals. Each day, you'll work through a challenging workout that will leave you feeling energized and ready to tackle the day.

  On day 1, you'll start with our incredible workout, ${
    dailyWorkouts?.daily_challenge_title
  }. This workout is specifically designed to ${
    dailyWorkouts?.daily_challenge_description
  }, giving you a powerful start to the program. As you progress through the program, each workout will become progressively more challenging, helping you to continuously improve your fitness level.

  Our program includes a variety of different workouts, so you'll never get bored with the same old routine. You'll work on everything from cardio to strength training to flexibility, ensuring that you get a complete and well-rounded fitness experience.

  At the end of this program, you'll feel stronger, fitter, and more confident than ever before. So what are you waiting for? Join us today and start your journey to a healthier, happier you!`;

  return programInfoString;
}
