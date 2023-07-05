import './Banner.css'

interface BannerProps {
    enderecoImagem: string,
    textoAlternativo?: string
}

const Banner = ({ enderecoImagem, textoAlternativo}:BannerProps) => {
    // JSX
    return (
        <header className="banner">
            <img src={enderecoImagem} alt={textoAlternativo}/>
        </header>
    )
}

export default Banner