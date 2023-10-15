import community from "./assets/ourworkphotos/community/communityPhotos"
import design from "./assets/ourworkphotos/design/designPhotos"
import cleanup from "./assets/ourworkphotos/cleanup/cleanupPhotos"
import greenSpace from "./assets/ourworkphotos/green_space/greenSpacePhotos"
import repair from "./assets/ourworkphotos/repair/repairPhotos"
import business from "./assets/ourworkphotos/small_business/businessPhotos"
import { useState } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import './styles/imageSlider.css'


const photoArrays = [
    {
        name: 'community',
        group: community
    },
    {
        name: 'design',
        group: design
    },
    {
        name: 'cleanup',
        group: cleanup
    },
    {
        name: 'greenSpace',
        group: greenSpace
    },
    {
        name: 'repair',
        group: repair
    },
    {
        name: 'business',
        group: business
    }
]

function ImageSlider({images}) {
    const [photoIndex, setPhotoIndex] = useState(0)

    const activePhotoSet = photoArrays.find(photoGroup => photoGroup.name === images)
    console.log(activePhotoSet.group.length)
    function showPrevImg() {
        setPhotoIndex(photoIndex => {
            if (photoIndex === 0) return activePhotoSet.group.length - 1
            return photoIndex - 1
        })
    }

    function showNextImg() {
        setPhotoIndex(photoIndex => {
            if (photoIndex === activePhotoSet.group.length - 1) return 0
            return photoIndex + 1
        })
    }


    return (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    display: "flex"
                }}
            >
                {activePhotoSet.group.map(({url, alt}, index) => (
                    <img
                        key={url}
                        src={url}
                        alt={alt}
                        className="img-slider-img"
                        style={{translate: `${-100 * photoIndex}%`}}
                    />
                ))}
            </div>
            <button
                onClick={showPrevImg}
                className="img-slider-btn"
                style={{ left: 0 }}
                aria-label="View Previous Image"
            >
                <ChevronLeft aria-hidden />
            </button>
            <button
                onClick={showNextImg}
                className="img-slider-btn"
                style={{ right: 0 }}
                aria-label="View Next Image"
            >
                <ChevronRight aria-hidden />
            </button>
        </div>

    )
}

export default ImageSlider