import communityPhotos from "./assets/ourworkphotos/community/communityPhotos"
import designPhotos from "./assets/ourworkphotos/design/designPhotos"
import cleanupPhotos from "./assets/ourworkphotos/cleanup/cleanupPhotos"
import greenSpacePhotos from "./assets/ourworkphotos/green_space/greenSpacePhotos"
import repairPhotos from "./assets/ourworkphotos/repair/repairPhotos"
import businessPhotos from "./assets/ourworkphotos/small_business/businessPhotos"
import { useState } from "react"


const photoArrays = [
    communityPhotos,
    designPhotos,
    cleanupPhotos,
    greenSpacePhotos,
    repairPhotos,
    businessPhotos
]

function ImageSlider() {
    // const [photoIndex, setPhotoIndex] = useState[0]

    return (
        <>
            <img src={photoArrays[0][0]} alt="" />
        </>
    )
}

export default ImageSlider