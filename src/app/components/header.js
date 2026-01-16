export default function Header({location}) {
    return <section>
        <h2 style={{ padding: "5px", backgroundColor: "lightgray" }}>
            {location}
        </h2>
    </section>;
}