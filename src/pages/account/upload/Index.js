import React, { useState, useCallback, useEffect } from 'react';
import { Container } from '../../../components/container/Index'
import { FileUploader } from '../../../components/fileUploader/FileUploader'
import { UploadProgressCard } from '../../../components/uploadProgressCard/UploadProgressCard'
import { Requests } from '../../../utils/requests/Index'

const Index = () => {
    const [selectedFiles, setSelectedFiles] = useState([])
    const [categories, setCategories] = useState([])
    const [tags, setTags] = useState([])

    // fetch category
    const fetchCategory = useCallback(async () => {
        try {
            const response = await Requests.Web.Category()
            if (response && response.status === 200) {
                if (response.data.data && response.data.data.length) {
                    const items = []
                    for (let i = 0; i < response.data.data.length; i++) {
                        const element = response.data.data[i]
                        items.push({
                            label: element.name,
                            value: element._id
                        })
                    }

                    setCategories(items)
                }
            }
        } catch (error) {
            if (error) console.log(error)
        }
    }, [])

    // fetch tags
    const fetchTags = useCallback(async () => {
        try {
            const response = await Requests.Web.Tags()
            if (response && response.status === 200) {
                if (response.data.data && response.data.data.length) {
                    const items = []
                    for (let i = 0; i < response.data.data.length; i++) {
                        const element = response.data.data[i]
                        items.push(element.title)
                    }

                    setTags(items)
                }
            }
        } catch (error) {
            if (error) console.log(error)
        }
    }, [])


    useEffect(() => {
        fetchCategory()
    }, [fetchCategory])

    useEffect(() => {
        fetchTags()
    }, [fetchTags])

    // Handle files
    const handleFiles = data => {
        const filesArray = []
        for (let i = 0; i < data.length; i++) {
            filesArray.push(data[i])
        }
        setSelectedFiles(filesArray)
    }

    return (
        <div className="file-uploader-container">
            <Container.Fluid>

                {/* Uploader container */}
                {selectedFiles && !selectedFiles.length ?
                    <Container.Row className="py-30">
                        <Container.Column className="col-md-8 col-lg-7 col-xl-6 col-xxl-5 m-auto">
                            <FileUploader
                                multi={false}
                                onSelected={files => handleFiles(files)}
                            />
                        </Container.Column>
                    </Container.Row>
                    : null
                }

                {/* Upload progress container */}
                {selectedFiles && selectedFiles.length ?
                    <Container.Row className="py-30">
                        <Container.Column className="col-md-8 col-lg-7 col-xl-6 col-xxl-5 m-auto">

                            {selectedFiles && selectedFiles.map((item, i) =>
                                <UploadProgressCard
                                    key={i}
                                    data={item}
                                    tags={tags}
                                    categories={categories}
                                />
                            )}

                        </Container.Column>
                    </Container.Row>
                    : null
                }
            </Container.Fluid>
        </div>
    );
};

export default Index;