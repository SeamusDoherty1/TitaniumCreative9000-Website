import Video from '../Components/VideoEmbedded'

export default function Videos(){
    //Insert the Videos Embbedd link(The jumble after 'embed/' on youtube embed) and title after the videos title
    const videoList = [
        { id: "1", title: "Deadpool Lonely Lonely", videoId: "sCg-44CTAd8?si=auoo6u3PNRX24btH"},
        { id: "2", title: "The Ultimate Desguise", videoId: "3Ka9snpPEC0?si=Kd2_ptxJRg5490yw"},
        { id: "3", title: "Ultron Problems", videoId: "MNcJe42qJ2A?si=AhL6XL3EYZXQGAod"},
        { id: "4", title: "Pizza Mishap", videoId: "O8Fkec9piNM?si=gU5hsQCMpgH-ZKVl"},
        { id: "5", title: "Exhausted", videoId: "dhqBqY_jwDk?si=UYLkEG4kFOIuCBN1"},
        { id: "6", title: "Cooking with Friends", videoId: "D2D9e2S8NUw?si=Xb4kiBnSvwv8oPM3"}
    ];
    return(
        <>
        <div>
            <h1>This is the Videos Page</h1>
            <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginTop: "1.5rem",
        }}
        >
        {videoList.toReversed().map((item) => (
          <Video
            key={item.id}
            title={item.title}
            videoId={item.videoId}
          />
        ))}
        </div>
        </div>
        </>
    )
    
}