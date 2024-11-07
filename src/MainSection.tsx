import Articles from "./Articles";

export default function MainSection() {
    return (
        <main>
            <Articles title="World" category="general"/>
            <Articles title="Business" category="business"/>
            <Articles title="Technology" category="technology"/>
            <Articles title="Sports" category="sports"/>
            <Articles title="Science" category="science"/>
            <Articles title="Entertainment" category="entertainment"/>
        </main>
    );
}