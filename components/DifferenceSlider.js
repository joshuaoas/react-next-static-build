import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';


function DifferenceSlider(props) {
    const FIRST_IMAGE = {
        id: 1,
        imageUrl: '/static/img/paintWorks-interior-painting-services-gilbert-arizona-8.jpg'
    };
    const SECOND_IMAGE = {
        id: 2,
        imageUrl: '/static/img/paintWorks-interior-painting-services-gilbert-arizona-9.jpg'
    };

    return (
        <div>

            <ReactBeforeSliderComponent
                firstImage={FIRST_IMAGE}
                secondImage={SECOND_IMAGE}
            />


            <style jsx>{`
             
         `}</style>
        </div>
    );
}


export default DifferenceSlider