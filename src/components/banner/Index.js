import React from "react";
import "./style.css";
import { useHistory } from "react-router";
import { SearchLarge } from "../search/Index";

export const Banner = () => {
  const history = useHistory();

  return (
    <div className="banner-container">
      <div className="banner-overlay">
        <div className="flex-center flex-column text-center">
          <div className="content-card">
            <h2 className="text-white fw-bold mb-3">
              Share your favourite image with peoples
            </h2>
            <p className="text-white mb-4">
              Over 2.4 million+ high quality stock images, shared by our
              talented community.
            </p>

            <SearchLarge
              onSearch={(value) => history.push(`/search?query=${value.query}`)}
            />

            <div className="pt-2">
              <small className="text-white-50">
                Popular Images: nature, wallpaper, background, dog, cat, autumn,
                food, halloween, flower, sky, moon, car, coronavirus
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
