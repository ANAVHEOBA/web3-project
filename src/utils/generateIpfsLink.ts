const generateIpfsMediaLink = (link : string) => {
    return `https://ipfs.io/ipfs/${link.substr(7)}`
}

export default generateIpfsMediaLink;
