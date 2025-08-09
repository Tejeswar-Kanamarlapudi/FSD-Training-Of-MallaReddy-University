import { useState, useEffect } from 'react';

export default function Home() {
  const [dateTime, setDateTime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState('');

  useEffect(() => {
    const fetchDateTime = async () => {
      // Try multiple APIs in sequence
      const apis = [
        {
          url: 'http://worldclockapi.com/api/json/utc/now',
          parser: (data) => data.currentDateTime,
          name: 'WorldClockAPI'
        },
        {
          url: 'https://timeapi.io/api/Time/current/zone?timeZone=UTC',
          parser: (data) => data.dateTime,
          name: 'TimeAPI'
        }
      ];

      for (const api of apis) {
        try {
          const response = await fetch(api.url);
          const data = await response.json();
          const datetime = api.parser(data);
          setDateTime(datetime);
          setSource(api.name);
          setLoading(false);
          return;
        } catch (err) {
          console.log(`Failed to fetch from ${api.name}:`, err);
        }
      }

      // If all APIs fail, use local time
      setDateTime(new Date().toISOString());
      setSource('Local Browser Time');
      setLoading(false);
    };

    fetchDateTime();
  }, []);

  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString()
    };
  };

  if (loading) return <div>Loading current date and time...</div>;

  const { date, time } = formatDateTime(dateTime);

  return (
    <div>
      <h1>Current Date and Time</h1>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Source: {source}</p>
    </div>
  );
}