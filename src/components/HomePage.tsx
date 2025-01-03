const HomePage: React.FC = () => {
    const apiUrl = "https://api.example.com"; 
  
    const fetchData = async () => {
      const response = await fetch(`${apiUrl}/data`);
      const data = await response.json();
      console.log(data);
    };
  
    return (
      <div>
        <h1>Welcome to CodeRabbit Test</h1>
        <button onClick={fetchData}>Fetch Data</button>
      </div>
    );
  };